FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl ca-certificates python3 make g++ && \
    rm -rf /var/lib/apt/lists/*

ARG USER_ID=1000
ARG GROUP_ID=1000

RUN groupadd -g $GROUP_ID appuser && \
    useradd -u $USER_ID -g $GROUP_ID -m -s /bin/sh appuser

USER appuser

ENV HOME=/home/appuser
ENV VOLTA_FEATURE_PNPM=1
ENV VOLTA_HOME=/home/appuser/.volta
ENV PATH=$VOLTA_HOME/bin:$PATH

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

RUN curl -fsSL https://get.volta.sh | bash -s -- --skip-setup

RUN volta --version

WORKDIR /app

CMD ["sh", "-c", "trap 'exit 0' TERM INT; sleep infinity & wait"]
