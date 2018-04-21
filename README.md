# Test bloomon 

This is the status of the test after around 4 hours
The program works. You can use docker or local to run it, see doc below.

I start from a structure and tools I always use in my projects (eslint, prettier, jest), so its just a copy/paste of the structure and base commands.

You can find in the code some tests I use to build the program (see yarn tdd)
But the code is not fully tested. Specialy I didn't have the time to do a feature test of the whole program (a shame because with jest and snapshot testing, It will be easy to use the sample and compare the output)

Its also the first time I used readline interface, so I did something very simple and I'm not using all the power of streams. 
I used only pure function in this program to simplify it and of course the datalayer is completely in memory/in a module (don't do that in prod). 
Also all the particular cases (empty string, wrong rule, etc ...) are not tested.

In term of librairies, I use common one (commander, lodash) and jest for test (my preference compare to chai, karma, etc ....)

Also the program is not using async function, because we have only one stream and one thread to read it, parallelisation is not required or will change nothing.

If you try to execute a lint (eslint) on the code, there are some bad practice I use for simplifying this test (param reassign, ...)

If you have any questions, please open issues.

## Requirements

### Docker execution
- docker 
- docker-compose

### Local version
- nvm
or
- nodejs carbon lts

and yarn

## Run it 

### Docker version

```bash
docker-compose up
```

Run the program directly with the example.stream file in input,
modify the docker-compose.yml if you want to execute something else.

### Local version

```bash
yarn start  
```

Will run the program with example.stream

If you want to execute another stream file :
```bash
node ./src/index.js <filePathOfInputStream>
```

## Test

```bash
yarn test:unit
```
