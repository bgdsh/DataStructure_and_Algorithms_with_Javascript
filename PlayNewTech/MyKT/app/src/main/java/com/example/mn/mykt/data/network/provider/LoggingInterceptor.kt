package com.example.mn.mykt.data.network.provider

import com.example.mn.mykt.BuildConfig
import okhttp3.logging.HttpLoggingInterceptor


fun makeLoggingInterceptor() = HttpLoggingInterceptor().apply {
    level = if (BuildConfig.DEBUG) HttpLoggingInterceptor.Level.BODY
    else HttpLoggingInterceptor.Level.NONE
}