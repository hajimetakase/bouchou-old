package bouchou_core.models

/**
  * Created by hajime on 2017/11/23.
  */
case class CourtEvent(
        id: String,
        title: String,
        incidentId: String,
        courtType: String,
        courtProcessType: String,
        courtDivision: String,
        courtRound: String,
        lang: String,
        country: String,
        courtName: String,
        courtRoom: String,
        mainJudgeName: String,
        rightJudgeName: String,
        leftJudgeName: String,
        defenceLawyers: List[String],
        defenceAttitude: String,
        plaintiffLawyers: List[String],
        plaintiffAttitude: String,
        startAt: List[String],
        endAt: String,
        previousDates: String,
        next: List[(String, String, String)],
        laws: List[(String, String)],
        links: List[String],
        bouchouIds: List[String],
        documentsUrls: List[String],
        tags: List[String],
        agenda: List[String],
        contributers: List[String],
        bouchouPeopleCount: List[String],
        isJury: Long,
        isBouchouTicket: Boolean,
        isPublic: Boolean,
        url: String,
        pv: Boolean,
        createdAt: String
)


