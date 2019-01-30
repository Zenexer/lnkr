# lnkr5 #

lnkr5 is a malware campaign that injects scripts into web pages via malicious browser extensions.

The campaign has been identified as belonging to [Brocode](brcode.io), a shell company registered in Hong Kong via [startupr.com.hk](https://startupr.com.hk/).  The attackers are believed to be Russian, but it's unclear whether the attack is state-sponsored or a clandestine effort.

The attackers clone legitimate and semi-legitimate Chrome extensions.  Scripts are added to the clones that inject ads into every web page visited by the victim, in addition to potentially sending sensitive data to C2 servers.  The C2 communications are disguised as analytics opt-out requests.  The malicious code will falsely explain to the victim that the ads suppor the development of the extension, but almost all of the affected extensions aren't developed by the attackers.

The attackers make the attack difficult to block.  Generic S3 bucket names are used, C2 domain names are frequently rotated, and C2 IP addresses are numerous and spread across many hosting providers.  C2 communications are disguised as opt-out requests.

The name `lnkr5` comes from the name of the bootstrap script, which has historically been named `lnkr5.min.js`.

# IOCs #

This should not be treated as an exhaustive list.

## Hostnames ##

```
proxdevcool.com
netcheckcdn.xyz
apiurl.org
netanalyzer.space
```

## URL prefixes ##

```
https://s3.amazonaws.com/jscache/
https://s3.amazonaws.com/jscript-cdn/
https://s3.amazonaws.com/cashe-js/
```

## URL contents ##

```
/api/js-get?sourceId=
/optout/get?jsonp=__twb_cb_
/lnkr5.min.js
/optout/set/lat?jsonp=
/optout/set/lt?jsonp=
```

## IP addresses ##

```
23.111.228.4
109.236.93.206
64.58.121.60
93.190.140.94
23.111.228.220
64.58.126.236
217.23.4.32
```

## Example URLs ##

This list is far from exhaustive.

```
https://netcheckcdn.xyz/addons/lnkr5.min.js
https://s3.amazonaws.com/jscript-cdn/1f404c54c2b0e13e0f.js
https://s3.amazonaws.com/cashe-js/143e7cdebf193d2764.js
https://s3.amazonaws.com/jscache/17c9c17dd4d2a394de.js
```