FROM node

RUN mkdir -p /usr/src/washservice/
WORKDIR /usr/src/userservice/

COPY . /usr/src/userservice/

RUN npm install -g npm@7.0.5
RUN npm i

EXPOSE 3009

CMD ["npm" , "run","start"]