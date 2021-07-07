FROM node

RUN mkdir -p /usr/src/fe/
WORKDIR /usr/src/fe/

COPY . /usr/src/fe/

#RUN npm install -g npm@7.0.5
#RUN npm i

EXPOSE 8080

CMD ["npm","run","serve"]