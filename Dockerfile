FROM node:13

RUN echo America/Bahia | tee /etc/timezone && dpkg-reconfigure --frontend noninteractive tzdata

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/

RUN yarn install
RUN yarn global add nodemon
RUN yarn global add serve

# Bundle app source
COPY . /usr/src/app

RUN yarn run build

CMD [ "serve", "-s", "build" ]