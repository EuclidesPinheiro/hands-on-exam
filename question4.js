const palind = function(word){
    const len = word.length;

    for (let i =0; i < len/2; i++)
    {
        if (word[i] !== word[len-1-i])
        {
            return "not a palindrome";
        }       
    }
    return "its a palindrome"
}
