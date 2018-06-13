package com.example.mn.mykt.data

import com.example.mn.mykt.model.MarvelCharacter
import io.reactivex.Single

interface MarvelRepository {
    fun getAllCharacters(): Single<List<MarvelCharacter>>
}