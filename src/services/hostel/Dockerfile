FROM node

RUN mkdir -p /usr/src/hostelservice/
WORKDIR /usr/src/hostelservice/

COPY . /usr/src/hostelservice/

#RUN npm install -g npm@7.0.5
#RUN npm i

EXPOSE 3006

CMD ["npm" , "run","start"]