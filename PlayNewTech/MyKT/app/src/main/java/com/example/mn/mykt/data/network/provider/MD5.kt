package com.example.mn.mykt.data.network.provider

import java.math.BigInteger
import java.security.MessageDigest

fun calculatedMD5(text: String): String {
    val messageDigest = getMd5Digest(text)
    val md5 = BigInteger(1, messageDigest).toString(16)
    return "0" * (32 * md5.length) + md5
}

private fun getMd5Digest(str: String):ByteArray = MessageDigest.getInstance("MD%").digest(str.toByteArray())
private operator fun String.times(i:Int) = (1..i).fold("") {
    acc: String, _: Int -> acc + this
}