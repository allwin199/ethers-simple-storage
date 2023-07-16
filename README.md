## To compile a contract using `solc` inside the terminal

`yarn solcjs --bin --abi --include-path node_modules/ --base-path . -o . SimpleStorage.sol`

-   --bin = to get the binary
-   --abi = to get the abi(Application Binary Interface)
-   Use the --base-path and --include-path options to describe the layout of your project. --base-path represents the root of your own source tree while --include-path allows you to specify extra locations containing external code (e.g. libraries installed with a package manager).
-   --base-path . = periodt refers to the same directory
-   -o . = output the files to this directory
-   Finally the contract file which we want to compile

Compiled Files.
After compiling solc will output 2 files

-   abi of the contract
-   binary of the contract
