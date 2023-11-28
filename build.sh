# /bin/bash

docker build -t zbjumper/docs-storefront:0.0.3 --push storefront

docker build -t zbjumper/docs-ai-learning:0.0.2 --push ai-learning

# docker build -t zbjumper/docs-vue3:0.0.2 .

docker build -t zbjumper/docs-oxygen-not-included:0.0.2 --push oxygen-not-included