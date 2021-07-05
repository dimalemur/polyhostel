FROM node

RUN mkdir -p /usr/src/eventsservice/
WORKDIR /usr/src/eventsservice/

COPY . /usr/src/eventsservice/

RUN npm install -g npm@7.0.5
RUN npm i

EXPOSE 3005

CMD ["npm" , "run","start"]