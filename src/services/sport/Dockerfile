FROM node

RUN mkdir -p /usr/src/sportservice/
WORKDIR /usr/src/sportservice/

COPY . /usr/src/sportservice/

RUN npm install -g npm@7.0.5
RUN npm i

EXPOSE 3007

CMD ["npm" , "run","start"]