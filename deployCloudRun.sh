PACKAGE_NAME=$(node -p "require('./package.json').name")
PACKAGE_VERSION=$(node -p "require('./package.json').version")

gcloud run deploy f1-schedule-api \
          --region us-central1 \
          --image us-central1-docker.pkg.dev/shultzlab/docker-gcp/$PACKAGE_NAME:$PACKAGE_VERSION \
          --platform "managed" \
          --quiet \
          --cpu=1 \
          --memory=256Mi \
          --min-instances="default" \
          --max-instances=2 \
          --port=8080 \
          --allow-unauthenticated