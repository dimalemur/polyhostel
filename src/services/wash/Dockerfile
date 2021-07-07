FROM node

RUN mkdir -p /usr/src/washservice/
WORKDIR /usr/src/washservice/

COPY . /usr/src/washservice/

#RUN npm install -g npm@7.0.5
#RUN npm i

EXPOSE 3009

CMD ["npm" , "run","start"]