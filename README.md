# Password_Generator
Homework Assignment Number 2

<!-- PSEUDOCODE -->
1. CLick on button
2. Button will trigger an alert
    * onclick event --> confirm box
    * confirm "Do you want a new password?"
        - if "ok" gets clicked, then bring up a new confirm window
        - if "cancel" gets clicked, then close confirm box

3. next confirm window : confirm whether or not user wants lowercase letters: "Do you want password to contain lowercase letters?"
        - if "yes" then array containing lowercase letters can be used in randomizer
        - if "no" then randomizer will not pick from lowercase letters array
    * once either 'yes' or 'no' are clicked, a new confirm window will appear

4. next confirm window : confirm whether or not user wants uppercase letters included: "Do you want password to contain uppercase letters?"
        - if "yes" then array containing uppercase letters can be used in randomizer
        - if "no" then randomizer will not pick from uppercase letters array
    * once either 'yes' or 'no' are clicked, a new confirm window will appear

5. next confirm window : confirm whether or not user wants numbers included: "Do you want password to contain numbers?"
        - if "yes" then array containing numbers 0-9 can be used in randomizer
        - if "no" then randomizer will not pick items from that array
    * once either 'yes' or 'no' are clicked, a new confirm window will appear

6. next confirm window : confirm whether or not user wants special characers included: "Do you want password to contain special characters?"
        - if "yes" then array containing special characters can be used in randomizer
        - if "no" then randomizer will not pick items from array that contains the special characters

    * once either 'yes' or 'no' are clicked, a Prompt window will appear
    * if 'no' is selected for all windows, then alert will pop up saying "Must choose at least 1 type of character" then takes user back to the beginning. Must click button again to begin survey.


7. Prompt will ask user "How long do you want the password to be? Enter a number between 8 and 120 below, and that's how long the password will be:
        - user must enter number between 8 and 120.
        - any number less than 8 or greater thatn 120 will prompt an alert
            * "Invalid number. Password must be between 8 and 120 characters long"
            * user clicks "ok" and erases previous entry
8. Once user enters in a number between 8 and 120, this number will become the length of the generated password.

Basic outline of code ends up being:

let lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
let specialArray = [" ", "!", """, "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "]", "^", "_", "`", "{", "|", "}", "~"];

9. if a category is selected, then that array gets pushed into a new, master array.

10. the number entered in as the user's password length becomes the password string's length.

11. randomizer must choose 'LENGTH' number of 'ITEMS' in array

12. string is created containing randomizer's choices from master array.

13. alert user with the resulting password.


