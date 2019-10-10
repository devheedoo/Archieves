# Firebase

1. [Firebase keepSynced(true) | StackOverflow](https://stackoverflow.com/questions/41478849/firebase-keepsyncedtrue)
   - `keepSynced()`와 `setPersistenceEnabled()` 모두 데이터를 캐시로 저장
   - `keepSynced()`는 리스너와 연결이 끊어져도 저장하고 있지만, `setPersistenceEnabled()`는 그렇지 않다.
2. [How to retrieve data while keepSynced is true in Firebase | StackOverflow](https://stackoverflow.com/a/40019169/5722210)
   - `keepSynced()` 사용하면 리스너가 끊어져도 동기화를 잘 해준다.
3. [Enabling Offline Capabilities on Android | Firebase](https://firebase.google.com/docs/database/android/offline-capabilities?hl=ko)
   - React Native Firebase 공식 문서에는 `keepSynced()` 메소드 설명이 없어서 이 문서를 간단히 필요한 부분만 정리했다.

