FROM node

RUN mkdir -p /usr/src/polyhosteproxy/
WORKDIR /usr/src/polyhosteproxy/

COPY . /usr/src/polyhosteproxy/

#RUN npm install -g npm@7.0.5
#RUN npm i

EXPOSE 3000

CMD ["npm" , "run","start"]