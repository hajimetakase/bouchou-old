package bouchou_core.models

/**
  * Created by hajime on 2017/11/26.
  */
case class ParliamentEvent(
                           id: String,
                           parliamentType: String,
                           commiteeType: String,
                           committeeChairmanName: String,
                           committeeNum: String,
                           lang: String,
                           country: String,
                           parliamentName: String,
                           parliamentRoom: String,
                           startAt: String,
                           endAt: String,
                           previousDates: String,
                           next: String,
                           laws: List[String],
                           links: List[String],
                           bouchouIds: List[String],
                           documentsUrls: List[String],
                           tags: List[String],
                           agendas: List[String],
                           contributers: List[String],
                           bouchouPeopleNum: Long,
                           isBouchouTicket: Boolean,
                           isPublic: Boolean,
                           pv: Long,
                           url: String,
                           createdAt: String
                         )