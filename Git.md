# Git

1. [What's the difference between git switch and git checkout `<branch>` | StackOverflow](https://stackoverflow.com/questions/57265785/whats-the-difference-between-git-switch-and-git-checkout-branch)
   - `git checkout <filename>` 명령어는 변경된 파일을 원래대로 되돌린다.
   - `git checkout` 과 다른 기능임에도 같은 옵션을 사용하고 있었기에 이를 구분하기 위해:
     - `git checkout` > `git switch`
     - `git checkout <filename>` > `git restore`
2. [Git 브랜치 Rebase하기 | Git](https://git-scm.com/book/ko/v1/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-Rebase%ED%95%98%EA%B8%B0)
   - 커밋 여러 개를 깔끔하게 하나로 합칠 때 `rebase` 사용하기
3. [About code owners | GitHub Help](https://help.github.com/en/articles/about-code-owners)
   - 깃헙 저장소 권한 설정 파일
4. [Remote branch not showing up in “git branch -r”](https://stackoverflow.com/questions/12319968/remote-branch-not-showing-up-in-git-branch-r)
   - `git checkout origin/BRANCH_NAME` 으로 최초 checkout 시 생길 수 있는 일
   - [10.5 Git Internals - The Refspec](https://git-scm.com/book/en/v2/Git-Internals-The-Refspec) 처럼 Git 세부 사항도 읽어보자
5. [원격 저장소에 올라간 커밋 되돌리기 - jupiny](https://jupiny.com/2019/03/19/revert-commits-in-remote-repository/)
   - 실수로 다른 브랜치에서 작업하다가 뒤늦게 알았을 때
6. [git이 추적하지 않는 untracked files 한꺼번에 삭제하기](https://blog.outsider.ne.kr/1164)
   - `git clean -fd`
7. [Git switch branch without discarding local changes](https://stackoverflow.com/questions/22082307/git-switch-branch-without-discarding-local-changes)
   - `git stash` 를 이용한다

