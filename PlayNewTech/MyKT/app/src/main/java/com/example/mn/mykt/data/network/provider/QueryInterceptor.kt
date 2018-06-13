package com.example.mn.mykt.data.network.provider

import com.example.mn.mykt.BuildConfig
import okhttp3.Interceptor

fun makeAddSecurityQueryInterceptor() = Interceptor { chain ->
    val originalRequest = chain.request()
    val timestamp = System.currentTimeMillis()

    val url = originalRequest.url()
            .newBuilder()
            .addQueryParameter("apiKey", BuildConfig.PUBLIC_KEY)
            .addQueryParameter("ts", "$timestamp")
            .addQueryParameter("hash", calculatedMD5(timestamp.toString()+BuildConfig.PRIVATE_KEY+BuildConfig.PUBLIC_KEY))
            .build()
    val request = originalRequest.newBuilder().url(url).build()
    chain.proceed(request)
}