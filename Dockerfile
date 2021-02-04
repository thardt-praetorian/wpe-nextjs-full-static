FROM node:{{.NodeVersion}}-slim

# This labels are based on Security Standards and Guidelines for Code Repositories and Images
# https://wpengine.atlassian.net/wiki/spaces/ASKSEC/pages/1648918689/Security+Standards+and+Guidelines+for+Code+Repositories+and+Images#Images
LABEL com.wpengine.owner="sec-headless"
LABEL com.wpengine.repo="headless"
LABEL com.wpengine.jira="GAIA"
LABEL com.wpengine.slack="gaia-alerts"

RUN echo 'wpeuser:x:10001:10001:WP Engine User:/app/repo:/bin/false' >> /etc/passwd \
    && echo 'wpegroup:*:10001:' >> /etc/group
WORKDIR /app/repo
COPY --chown=10001:10001 node_modules node_modules
COPY --chown=10001:10001 repo/ ./
ENV PORT {{.Port}}
ENV HOME /app
USER root
CMD ["npm", "start"]
