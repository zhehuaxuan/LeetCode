


(function(arg){
    function isRepeat(s){
        var a = new Set(s.split(""));
         if(a.size==s.length)
             return false;
         else
             return true;
     }
    function lengthOfLongestSubstring(s){
        var result = 0;
        for(let i=0;i<s.length;i++){
            for(let j=i+1;j<=s.length;j++){
                //String.prototype.slice(start,end)
                //截取下标区间为[start,end)的字符子串
                var ss = s.slice(i,j);
                var res = isRepeat(ss);
                if(!res){
                    result = result>(j-i)?result:(j-i);
                }
            }
        }
        return result;
    }
    
    console.log(lengthOfLongestSubstring(arg));
})("pwwkew");