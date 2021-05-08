package bouchou_core.models

/**
  * Created by hajime on 2017/11/26.
  */
case class GovermentEvent(
                           id: String,
                           ministryName: String,
                           bureauName: String,
                           divisionName: String,
                           committeeName: String,
                           committeeNum: String,
                           place: String,
                           room: String,
                           lang: String,
                           country: String,
                           tile: String,
                           url: String,
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
                           createdAt: String
                         )
