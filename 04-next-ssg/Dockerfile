FROM ubuntu

ENV DEBIAN_FRONTEND=noninteractive

# 3. Update system and install required tools
RUN apt-get update && apt-get install -y \
    curl \
    && apt-get clean

# 4. Install Node.js (LTS)
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean 

# 5. Set working directory
WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

