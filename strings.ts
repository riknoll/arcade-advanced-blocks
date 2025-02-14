interface String {
    //% blockId=advanced_stringTrim
    //% block="$this trim whitespace"
    //% this.shadow=text
    //% this.defl=this
    //% blockNamespace="text"
    //% group=Advanced
    //% weight=100
    //% blockGap=8
    trim(): string;

    //% blockId=advanced_stringToUpperCase
    //% block="$this to uppercase"
    //% this.shadow=text
    //% this.defl=this
    //% blockNamespace="text"
    //% group=Advanced
    //% weight=90
    //% blockGap=8
    toUpperCase(): string;

    //% blockId=advanced_stringToLowerCase
    //% block="$this to lowercase"
    //% this.shadow=text
    //% this.defl=this
    //% blockNamespace="text"
    //% group=Advanced
    //% weight=80
    toLowerCase(): string;

    /**
     * Returns true if the current string starts with the given prefix.
     *
     * @param prefix the prefix to search for
     * @param index the index to begin searching at
     */
    //% blockId=advanced_stringStartsWith
    //% block="$this starts with $prefix||at position $index"
    //% this.shadow=text
    //% this.defl=this
    //% prefix.shadow=text
    //% prefix.defl=abc
    //% blockNamespace="text"
    //% group=Advanced
    //% helper=stringStartsWith
    //% weight=70
    //% blockGap=8
    startsWith(prefix: string, index?: number): boolean;

    /**
     * Returns true if the current string ends with the given suffix.
     *
     * @param suffix the suffix to search for
     * @param index the index to begin searching at (the index of the suffix's last character plus one)
     */
    //% blockId=advanced_stringEndsWith
    //% block="$this ends with $suffix||at position $index"
    //% this.shadow=text
    //% this.defl=this
    //% suffix.shadow=text
    //% suffix.defl=abc
    //% blockNamespace="text"
    //% group=Advanced
    //% helper=stringEndsWith
    //% weight=60
    endsWith(suffix: string, index?: number): boolean;
}

namespace stringHelpers {
    /**
     * Replaces the first occurence of one string with another.
     *
     * @param text the string to do the replacing within
     * @param fromString the string to remove
     * @param toString the string to insert
     */
    //% blockId=advanced_stringReplace
    //% block="$text replace $fromString with $toString"
    //% text.shadow=text
    //% text.defl=this
    //% fromString.shadow=text
    //% fromString.defl=from
    //% toString.shadow=text
    //% toString.defl=to
    //% blockNamespace="text"
    //% group=Advanced
    //% weight=50
    //% blockGap=8
    export function replace(text: string, fromString: string, toString: string): string {
        return text.replace(fromString, toString);
    }

    /**
     * Replaces all occurences of one string with another.
     *
     * @param text the string to do the replacing within
     * @param fromString the string to remove
     * @param toString the string to insert
     */
    //% blockId=advanced_stringReplaceAll
    //% block="$text replace all $fromString with $toString"
    //% text.shadow=text
    //% text.defl=this
    //% fromString.shadow=text
    //% fromString.defl=from
    //% toString.shadow=text
    //% toString.defl=to
    //% blockNamespace="text"
    //% group=Advanced
    //% weight=40
    export function replaceAll(text: string, fromString: string, toString: string): string {
        return text.replaceAll(fromString, toString);
    }
}

namespace helpers {
    export function stringStartsWith(s: string, prefix: string, index?: number): boolean {
        if (prefix.length === 0) return true;
        if (!index || Number.isNaN(index) || index < 0) {
            index = 0;
        }
        else {
            index |= 0;
        }
        if ((s.length - index) < prefix.length) return false;

        for (let i = 0; i < prefix.length; i++) {
            if (s.charAt(index + i) !== prefix.charAt(i)) {
                return false;
            }
        }

        return true;
    }

    export function stringEndsWith(s: string, suffix: string, index?: number): boolean {
        if (suffix.length === 0) return true;

        if (index == undefined || Number.isNaN(index)) {
            index = s.length;
        }
        else if (index <= 0) {
            return false;
        }
        else {
            index |= 0;
        }

        if (index < suffix.length) return false;

        for (let i = 0; i < suffix.length; i++) {
            if (s.charAt(index - 1 - i) !== suffix.charAt(suffix.length - 1 - i)) {
                return false;
            }
        }

        return true;
    }
}