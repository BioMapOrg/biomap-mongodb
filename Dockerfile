FROM mongo:4

RUN apt-get update && \
    apt-get upgrade -y

RUN apt-get install -y python3 python3-pip && \
    python3 -m pip install setuptools && \
    mkdir app

WORKDIR /app

COPY . .

RUN python3 setup.py install 
