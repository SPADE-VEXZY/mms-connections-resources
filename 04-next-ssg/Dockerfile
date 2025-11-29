FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

# ----------------------------
# Install dependencies
# ----------------------------
RUN apt-get update && apt-get install -y \
    nginx \
    php-fpm \
    php-cli \
    php-mbstring \
    php-xml \
    php-curl \
    php-zip \
    php-gd \
    php-intl \
    supervisor \
    curl \
    unzip \
    && apt-get clean

# ----------------------------
# Remove default nginx site
# ----------------------------
RUN rm -f /etc/nginx/sites-enabled/default

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# ----------------------------
# Set working directory
# ----------------------------
WORKDIR /var/www/html

# Copy PHP application
COPY . /var/www/html

# Fix permissions
RUN chown -R www-data:www-data /var/www/html && chmod -R 755 /var/www/html

# ----------------------------
# Copy supervisor config
# ----------------------------
COPY supervisord.conf /etc/supervisor/supervisord.conf

# Expose port 80
EXPOSE 80

# Start supervisor to run PHP-FPM + Nginx
# CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/supervisord.conf"]
