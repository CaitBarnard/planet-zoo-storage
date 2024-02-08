FROM python:3

WORKDIR /planetzoostorage

ENV \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PYTHONPATH=/planetzoostorage 

RUN pip install --upgrade pip
COPY requirements.txt /planetzoostorage/
RUN pip install -r requirements.txt

COPY . /planetzoostorage/