package com.example.mn.mykt.data.network.provider

import okhttp3.Interceptor

fun makeHeadersInterceptor() = Interceptor{ chain ->
    chain.proceed(chain.request().newBuilder()
            .addHeader("Accept", "application/json")
            .addHeader("Accept-Language", "en")
            .addHeader("Content-Type", "application/json")
            .build()
    )
}