
<p align="center">
    <img src="https://omerprofile-dda24.appspot.com/Logo_2.png"  width="102" height="72">
</p>


## JSON Functions that :
<p align="center">
<br>
- read.
<br>
- writeover or create.
<br>
- append .
<br>
</p>



### Installation

```bash
npm install json_functions
```
or simpler

```bash
npm i json_functions
```

## Why should I use this package?

This package simapling many things as: 

- just writing the name of the json 
```bash
read("jsonExample")
```
 and its read all the json in one command.

- Creating new json with easy template 
```bash
write(jsonName,id,firstname,lastname,address) 
```
That gives nice template with array 
```bash
[
        id,{
        "First name":firstname,
        "Last name":lastname,
        "Address":address
        }]
```

**Attention**:  `write` function will overwrite the json file. be carefull with the jsons you are writing on .

- append new line into the Json array with easy template 
```bash
append(jsonName,id,firstname,lastname,address) 
```

That gives nice template with array 
```bash

[
        id,{
        "First name":firstname,
        "Last name":lastname,
        "Address":address
        }]
```
also thit function check if there is same id and if there already there raise error.

**Attention**:  `append` function will not append into empty json and not create new one.



### Usage


```js
const jf = require('json_functions');

```
Examples:

input:
```bash
jf.write(jsonName,id,firstname,lastname,address) 
```
output:
in the json:
```bash
        [
        [id,{
        "First name":firstname,
        "Last name":lastname,
        "Address":address
        }]] 
```

input:
```bash
jf.append(jsonName,id,firstname,lastname,address) 
```
output:
in the json:
```bash
        [[id,{
        "First name":firstname,
        "Last name":lastname,
        "Address":address
        }] ,
        [id,{
        "First name":firstname,
        "Last name":lastname,
        "Address":address
        }]] 
```

```bash
jf.read(jsonName) 
```

## Credit

<p align="center">
  <a href="https://github.com/Omeritzio"> My Github</a>
  <a href="omerprofile-dda24.firebaseapp.com">My Website</a>
  <a href="www.linkedin.com/in/omer-shlomo-396b0419a">My Linkedin</a>
</p>

