package com.leetcode;



public class IPValidate {

        public String defangIPaddr(String address) {
            String items[] = address.split("\\.");
            String res = "";
            for(int i =0;i<items.length;i++){
                if(i==items.length-1){
                    res+=items[i];
                }else{
                    res+=items[i]+"[.]";
                }
            }
            return res;
        }
}
