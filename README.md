# tutorial_MEAN

5/25/2017
Install MEAN stack (Mac)
1. install nodebrew(node.js, npm)
Check node.js and npm is already installed

For node.js
```
node --v
```
For npm
```
npm --v
```

If node.js is already installed, delete by below command.
```
lsbom -f -l -s -pf /var/db/receipts/org.nodejs.pkg.bom \
| while read i; do
  sudo rm /usr/local/${i}
done
sudo rm -rf /usr/local/lib/node \
     /usr/local/lib/node_modules \
     /var/db/receipts/org.nodejs.*
```
If npm is already exists, delete by below command.(if npm is in the HOME directory)
```
sudo rm -rf ~/.npm
```
