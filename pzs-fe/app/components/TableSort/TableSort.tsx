import { useEffect, useState } from "react";
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  rem,
  keys,
} from "@mantine/core";
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
  IconSearch,
  IconGenderFemale,
  IconGenderMale,
} from "@tabler/icons-react";
import classes from "./TableSort.module.css";

const columns = ["id", "species", "name", "gender"];

type RowData = {
  [K in (typeof columns)[number]]: string;
};

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

interface TableSortProps {
  dataObject: Object[];
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const Icon = sorted
    ? reversed
      ? IconChevronUp
      : IconChevronDown
    : IconSelector;
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  );
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

function mapObjectToRowData(dataObject: { [key: string]: any }): RowData[] {
  return Object.values(dataObject).map((value) => ({
    id: value.id.toString(),
    species: value.species.name,
    name: value.name,
    gender: value.gender,
  }));
}

export function TableSort({ dataObject }: TableSortProps) {
  const [search, setSearch] = useState("");
  const [mappedData, setMappedData] = useState<RowData[]>([]);
  const [sortedData, setSortedData] = useState<RowData[]>([]);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  useEffect(() => {
    const newMappedData = mapObjectToRowData(dataObject);
    setMappedData(newMappedData);
    setSortedData(newMappedData);
  }, [dataObject]);

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(mappedData, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(mappedData, {
        sortBy,
        reversed: reverseSortDirection,
        search: value,
      })
    );
  };

  const renderGenderIcon = (gender: string) => {
    const Icon = gender === "M" ? IconGenderMale : IconGenderFemale;
    const color = gender === "M" ? "#00abfb" : "#ff5c8d";
    return (
      <Icon
        style={{ width: rem(20), height: rem(20) }}
        stroke={2}
        color={color}
      />
    );
  };

  const rows = sortedData.map((row) => (
    <Table.Tr key={row.id}>
      {columns.map((column) =>
        column === "gender" ? (
          <Table.Td key={column}>{renderGenderIcon(row[column])}</Table.Td>
        ) : (
          <Table.Td key={column}>{row[column]}</Table.Td>
        )
      )}
    </Table.Tr>
  ));

  return (
    <ScrollArea>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        leftSection={
          <IconSearch
            style={{ width: rem(16), height: rem(16) }}
            stroke={1.5}
          />
        }
        value={search}
        onChange={handleSearchChange}
      />
      <Table
        highlightOnHover
        horizontalSpacing="md"
        verticalSpacing="xs"
        miw={700}
        layout="fixed"
      >
        <colgroup>
          <col style={{ width: "10%" }} />
          <col style={{ width: "40%" }} />
          <col style={{ width: "40%" }} />
          <col style={{ width: "10%" }} />
        </colgroup>
        <Table.Tbody>
          <Table.Tr>
            {columns.map((column) => (
              <Th
                sorted={sortBy === column}
                reversed={reverseSortDirection}
                onSort={() => setSorting(column)}
              >
                {column.charAt(0).toUpperCase() + column.slice(1)}
              </Th>
            ))}
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={columns.length}>
                <Text fw={500} ta="center">
                  No animals found
                </Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
