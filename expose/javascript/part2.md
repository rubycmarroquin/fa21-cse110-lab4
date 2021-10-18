1. 3 gets printed. It is because for the for loop that happens at line 6.
2. 150 gets printed. It is a result of the final iteration of the for loop at line 6 and is last reassigned from the code on line 7. 
3. 150 gets printed. It is a result of the final iteration of the for loop at line 6 and is last reassigned from the code on line 8. 
4. It will return an array which will have the values [50, 100, 150]. The reason for this is because of line 9 where the finalPrice result is being pushed into the discounted[] array. 
5. An error occurs because of "let". "let" only works within the nested code block that it is defined in which in this case is the for loop. 
6. Similar to 5, the error occurs because of "let" where discountedPrice is only allowed to be accessed/defined within the nested code block it is in, which in this case is the for loop. 
7. 150 gets printed. The reason for this is because finalPrice was defined at the beginning of the code block / the same code block in which console.log() is accessing it. 
8. It will return an array which will have the values [50, 100, 150]. The reason for this is because of line 9 where the finalPrice result is being pushed into the discounted[] array. 
9. An error occurs because i is being accessed outside of the code block in which it was created. 
10. 3 is printed. The reason for this is because length is never reassigned and is a const variable which was defined at the beginning. 
11. It will return an array which will have the values [50, 100, 150]. The reason for this is because of line 9 where the finalPrice result is being pushed into the discounted[] array. Let and const do not affect these values because of the for loop. 
12. Given the above Object, write the notation for: \
    A. student.name \
    B. student["Grad Year"] \
    C. student.greeting() \
    D. student["Favorite Teacher"].name \
    E. student.courseLoad[0]
13. Arithmetic \ 
    A. '32' a string + anything concats \
    B. 1 because unlike "+" it does not concat and turns it into its int representation \
    C. 3 because null is converted into 0. \ 
    D. '3null' because it concats both strings into one. \ 
    E. 4 because true is converted into its numeric representation of 1. \ 
    F. 0 because both false and null are converted into their numeric representation of 0. \
    G. '3undefined' because it treats both as strings and concats into one. \ 
    H. NaN because undefined does not map to any number.
14. Comparison \
    A. true because 2 is mapped to its integer representation and 2 is greater than 1. \
    B. false because it is not doing a number comparison, but rather it is comparing each character in thr string for its lexical order (e.g., a < b < c < d) \
    C. true because '2' maps to its integer representation and 2 == 2 is true. \
    D. false because '2' and 2 do not have the same value and type. \ 
    E. false because true maps to its integer representation of 1. \
    F. true because Boolean() with a positive number is true, therefore, true === true. 
15. == one is comparing relative value and === is comparing absolute value. 
16. Can be found [here](part2-question16.js)
17. The result will be an array with the values [2, 4, 6]. A quick walkthrough: the function modifyArray which takes in an array and function. It then creates a new array which will be used to push the values resulting from the for loop into it. Once entering the for loop, it will push the result of the callback function which takes in an int each iteration until the conditions of the for loop are met. Once it finishes the for loop, it will return the new array with the values from the for loop. 
18. Can be found [here](part2-question18.js)
19. It would print out: \
    1 \
    4 \
    3 \
    2
