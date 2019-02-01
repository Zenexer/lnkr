# lnkr #

lnkr is a malware campaign that injects scripts into web pages via malicious browser extensions.

The campaign has been identified as belonging to [Brocode](brcode.io), a shell company registered in Hong Kong via [startupr.com.hk](https://startupr.com.hk/).  The attackers are believed to be Russian, but it's unclear whether the attack is state-sponsored or a clandestine effort.

The attackers clone legitimate and semi-legitimate Chrome extensions.  Scripts are added to the clones that inject ads into every web page visited by the victim, in addition to potentially sending sensitive data to C2 servers.  The C2 communications are disguised as analytics opt-out requests.  The malicious code will falsely explain to the victim that the ads suppor the development of the extension, but almost all of the affected extensions aren't developed by the attackers.

The extension that I analyzed, Flash Player + 1.2.0, ID fanagokoaogopceablgmpndejhedkjjb, was a modified, likely unauthorized clone of an extension of the same name, ID fnipglnbhfacfmefbgiiodalehbcgcbm.  The malicious clone has been removed from the Chrome Web Store; the original remains.

The attackers make the attack difficult to block.  Generic S3 bucket names are used, C2 domain names are frequently rotated, and C2 IP addresses are numerous and spread across many hosting providers.  C2 communications are disguised as opt-out requests.

Affected extensions appear widespread and affect a significant percentage of English-speaking Chrome users.  The extensions are often removed from the Chrome store before they can be analyzed, which makes it difficult to assess the number of affected extensions.  Concentrations appear to be in the United States and India.

At least one extension keeps a log of search keywords.  It's not yet certain that this data is stored and transmitted by lnkr, but preliminary evidence points to that conclusion.

The name `lnkr` appears to be the name used by the attackers.  The boostrap scripts are prefixed with `lnkr`, and some of the server-side C2 source code is in a folder named `lnkrApi`.

In at least some extensions, lnkr loads itself via Mixpanel by overriding `MIXPANEL_CUSTOM_LIB_URL`.

# IOCs #

This should not be treated as an exhaustive list.

## Domain names ##

```
apiurl.org
appsource.cool
bigestsafe.com
cdnpps.us
countmake.cool
cozytech.biz
flashplaylist.com
godlinkapp.com
hanstrackr.com
infoanalytics.tools
laubeyrietechnology.com
linkcount.cool
makesource.cool
netanalyzer.space
netcheckcdn.xyz
profflinkgo.com
promlinkdev.com
proxdevcool.com
scrlink.cool
serenityart.biz
srvvtrk.com
thisadsfor.us
trafficvalidation.tools
votetoda.com
webclose.net
youradexchange.com
yourfirstcheapshop.com
```

## URL prefixes ##

Scheme can be either `http:` or `https:`.

```
//s3.amazonaws.com/jscache/
//s3.amazonaws.com/jscript-cdn/
//s3.amazonaws.com/cashe-js/
//s3.amazonaws.com/jsbooster/
//adrs.me/get?key=6ae9f4bd1dc812dc713d61cba871d8e8&
```

## URL contents ##

```
/api/js-get?sourceId=
/optout/get?jsonp=__twb_cb_
/lnkr5.min.js
/optout/set/lat?jsonp=
/optout/set/lt?jsonp=
/script/d.php?uid=
/www/delivery/avw.php?
/www/delivery/afr.php?
/www/delivery/ck.php?
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

## Arbitrary strings ##

```
lnkr5.min.js
lnkr30_nt.min.js
143e7cdebf193d2764
1bbe2f4535e7dfb295
c822bb0d82ad01a5ae
__ckp_srchydx_fired
__ckp_srchmlr_fired
```

## Example script URLs ##

This list is far from exhaustive.

URLs may be requested over plain HTTP or HTTPS.

```
https://netcheckcdn.xyz/addons/lnkr5.min.js
https://netcheckcdn.xyz/addons/lnkr30_nt.min.js
https://s3.amazonaws.com/jscript-cdn/1f404c54c2b0e13e0f.js
https://s3.amazonaws.com/cashe-js/143e7cdebf193d2764.js
https://s3.amazonaws.com/jscache/17c9c17dd4d2a394de.js
https://s3.amazonaws.com/jscache/16a168f0af2da0c3c2.js
```

## Analytics IDs ##

These IDs are seen interspersed with malicious code.  They may or may not belong to the attackers or uniquely identify the attacks.

* Mixpanel
    * 58410f8ab299e0eb2b736f6e233eda37
* Google Analytics
    * UA-108823706-1

# Abuse report correspondence #

I sent an abuse report to Amazon Web Services regarding the S3 buckets.  Amazon didn't remove the malicious code.  When I questioned why, they forwarded me this response from the attackers.  (Some of the text is quoted from my original report; they appear to be addressing the individual points I mentioned.)

```
Hello,

thanks for reaching us out regarding this issue.

1. Here is a Virustotal report for the object 'jscript-cdn/1f404c54c2b0e13e0f.js' : https://www.virustotal.com/#/url/5f4279d8097fd1fd1c234e992a0c028146e5d102b2a3636fe1a9db3b87240503/detection, as you can see only ESET alerts on this, but from our latest case we figured out that it’s a false positive alert on the URL, not for a script content, but haven’t got a reply from ESET so far. The same situation is for 'jscript-cdn/1f65199417190d400c.js’.

Anyway this scripts are not in use at this time.

2. 'jscript-cdn/ is used to host scripts that are part
of a malware campaign. The attacker creates malicious duplicates of
legitimate extensions in the Chrome web store and injects these scripts
into them. The ‘jscript-cdn’ is used to host scripts for: 
    1. Monetization chrome extensions, firefox addons, websites and other web applications.
     2. Analytics scripts for browser extensions.
If the script is used for monetization, it’s completely MS and Google Compliance. Nor Monetization of extensions nor Injecting ads in a proper way is not prohibited. There are Extension’s Quality Quidlines and Single Purpose Policy. And of course there is no malicious code inside, we check all scripts regularly and are eager to keep them clean. If you find something suspicious in our scripts please let us know and we’ll take the action immediately.

3. The link is to an old article about the extension that had been using monetization script with search enhanced results, but the integration has been made incorrect that’s why some important features, such as Opt Out from ads hadn't been work. But the extension has been dropped from the store not for monetization particularly but for violating single purpose policy.

User installs the extension from official chrome store, if he doesn’t like that the extension is monetized with scripts he can easily remove the extension from his browser and install alternative from the store. Usually our clients aware users in the description of the extension that it contains the monetization scripts.

Best wishes,
Brocode Team
```

# Related reports #

* https://gist.github.com/shivanshu3/45817d2354e41ca858c915b556a7174a
