package com.example.mn.mykt.data

import com.example.mn.mykt.data.network.dto.CharacterMarvelDto
import com.example.mn.mykt.data.network.provider.MarvelApi
import com.example.mn.mykt.data.network.provider.retrofit
import com.example.mn.mykt.model.MarvelCharacter
import io.reactivex.Single

class MarvelRepositoryImpl: MarvelRepository {
    val api = retrofit.create(MarvelApi::class.java)
    override fun getAllCharacters(): Single<List<MarvelCharacter>> = api.getCharacters(
            0, elementsOnListLimit
    ).map{
        it.data?.results.orEmpty().map{
            MarvelCharacter(it as CharacterMarvelDto)
        }
    }
    companion object {
        const val elementsOnListLimit = 50
    }
}