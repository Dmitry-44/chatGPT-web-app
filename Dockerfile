FROM node:16.14
# RUN apt update && apt install git -y
WORKDIR /var/
COPY . /var/
COPY package.json /var/

RUN npm install
RUN npm run build

CMD [ "npm", "start" ]