FROM node:12.16.1-alpine

WORKDIR /app/
ADD package.json .
RUN npm install --production=true
ADD src ./src 

CMD ["npm" , "start"]
EXPOSE  3000