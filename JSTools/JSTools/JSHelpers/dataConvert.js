﻿var dataConvert = (function () {
    "use strict";
    function dataConvert() { }
    dataConvert.prototype.cir2Lat = function (zapromenu) {
        var rez = "";        
        for (var i = 0; i < zapromenu.length; i++) {
            var slovo = zapromenu.charAt(i);
            rez += convert(slovo, _cir2lat);
        }
        return rez;
    };
    dataConvert.prototype.lat2Cir = function (zapromenu) {
        var rez = "";
        for (var i = 0; i < zapromenu.length; i++) {
            var slovo = zapromenu.charAt(i);
            var sledece = zapromenu.charAt(i + 1);
            if (typeof sledece !== "undefined" && sledece !== null)
                if (/^lj|Lj|LJ|nj|Nj|NJ|dž|Dž|DŽ$/.test(slovo + sledece)) {
                    slovo += sledece;
                    i++;
                }
            rez += convert(slovo, _lat2cir);
        }
        return rez;
    };
    function convert(slovo, recnik) {
        return recnik[slovo] || slovo;
    }
    var _cir2lat = {
        //mala slova
        "а": "a", "б": "b", "в": "v", "г": "g", "д": "d", "ђ": "đ", "е": "e", "ж": "ž", "з": "z", "и": "i",
        "ј": "j", "к": "k", "л": "l", "љ": "lj", "м": "m", "н": "n", "њ": "nj", "о": "o", "п": "p", "р": "r",
        "с": "s", "т": "t", "ћ": "ć", "у": "u", "ф": "f", "х": "h", "ц": "c", "ч": "č", "џ": "dž", "ш": "š",
        //velika slova
        "А": "A", "Б": "B", "В": "V", "Г": "G", "Д": "D", "Ђ": "Đ", "Е": "E", "Ж": "Ž", "З": "Z", "И": "I",
        "Ј": "J", "К": "K", "Л": "L", "Љ": "LJ", "М": "M", "Н": "N", "Њ": "NJ", "О": "O", "П": "P", "Р": "R",
        "С": "S", "Т": "T", "Ћ": "Ć", "У": "U", "Ф": "F", "Х": "H", "Ц": "C", "Ч": "Č", "Џ": "DŽ", "Ш": "Š"
    };
    var _lat2cir = {
        //mala slova
        "a": "а", "b": "б", "v": "в", "g": "г", "d": "д", "đ": "ђ", "e": "е", "ž": "ж", "z": "з", "i": "и",
        "j": "ј", "k": "к", "l": "л", "lj": "љ", "m": "м", "n": "н", "nj": "њ", "o": "о", "p": "п", "r": "р",
        "s": "с", "t": "т", "ć": "ћ", "u": "у", "f": "ф", "h": "х", "c": "ц", "č": "ч", "dž": "џ", "š": "ш",
        //velika slova
        "A": "А", "B": "Б", "V": "В", "G": "Г", "D": "Д", "Đ": "Ђ", "E": "Е", "Ž": "Ж", "Z": "З", "I": "И",
        "J": "Ј", "K": "К", "L": "Л", "LJ": "Љ", "Lj": "Љ", "M": "М", "N": "Н", "NJ": "Њ", "Nj": "Њ", "O": "О", "P": "П", "R": "Р",
        "S": "С", "T": "Т", "Ć": "Ћ", "U": "У", "F": "Ф", "H": "Х", "C": "Ц", "Č": "Ч", "DŽ": "Џ", "Dž": "Џ", "Š": "Ш"
    };
    return dataConvert;
})();