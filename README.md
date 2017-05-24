# tutorial_MEAN

5/25/2017

Install MEAN stack (Mac)

## 1. install nodebrew(node.js, npm)

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

Install nodebrew on HOME directory

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
```
brew install node
```
Check $PATH

```
echo $PATH
```

If PATH does not contains "/.nodebrew/current/bin", follow this command.

```
vi $HOME/.bash_profile
```
Then write below code.
```
export PATH=$HOME/.nodebrew/current/bin:$PATH
```

Check if installation succeeded.

```
nodebrew help
```

## 2. Install MongoDB

```
brew install mongodb
```
Make Directory for database
```
sudo mkdir -p /data/db
sudo chmod 777 /data/db
```
Then run this command
```
mongod
```
After it work properly, exit by ctrl+c and run command below.
```
mongo
```
If it works, exit.

## 3. install Bower
Follow command below
```
npm install -g bower
```
## 4. install Gulp
Follow command below
```
sudo npm install -g gulp-cli
```











