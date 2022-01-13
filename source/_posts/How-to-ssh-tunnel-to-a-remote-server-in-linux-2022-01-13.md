---
title: How to ssh tunnel to a remote server in linux
tags:
  - How to
  - SSH
  - Linux
icon: fas fa-terminal
date: 2022-01-13 21:43:49
---


In our project, we regularly deploy our app to one of our clients servers via their VPN.

After successful deployment, we need to verify the app of course. Usually you can type the IP address with the app's port on the browser.

Recently, one of our clients have turned off the direct browser access and permitted only via SSH tunneling.

## Tunnel localhost to remote server

Using the below command, we can tunnel our local request to remote server including the port forward.

```sh
$ ssh -N ashkeys@ashokma.com -L 8080:localhost:8080
```

| Flags | Reason              |
| ----- | ------------------- |
| N     | No shell after this |
| L     | Forward port        |

Now the _8080_ port of the **ashokma.com** server is tunneled to through our **localhost:8080**.

> **Tip:** Use `-f` flag to keep the session running in the background.
