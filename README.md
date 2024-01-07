# TASH

tash is a javascript library that helps in easy CRUD testing in terminal by providing 'tash' CLI

## Installation

To install the package run:

`npm install tash`

After installation run the following command to register the tash cli that you will be using (with the brackets):

`(cd node_modules/tash && npm link)`

## Usage

run `tash -help` for help and choose the command regarding what you need to do

**to make a request that requires you sending data(object)**

The spacing in your writing doesn't affect anything, the key is following these guidelines:

 - The object must be enclosed in triple quotes (not backticks)
 - Properties and string values must also be in double quotes (not single quotes)
 
```
'''
{
    "username":"johndoe",
    "password":"john123"
}
'''
```