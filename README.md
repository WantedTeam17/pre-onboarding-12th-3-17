# 🔎 한국임상정보 검색창
_원티드 프리온보딩 인턴십 17팀 3주차 기업과제_

## 프로젝트 소개

### 내용
원티드 프리온보딩 프론트엔드 인턴십 3주 차 과제 내용을 구현한 프로젝트입니다.

### 목표
[한국임상정보](https://clinicaltrialskorea.com/)의 검색창 클론 코딩

## 😁 팀원 소개

| 백하람                                                                                                    | 변혜빈                                                                                                    | 양음정                                                                                                        | 이유승(팀장)                                                                                                     | 임정훈                                                                                                 |                                                                                                   
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | 
| <img src="https://avatars.githubusercontent.com/u/74824057?v=4" alt='@ramrami-B' width="130" height="130"> | <img src="https://avatars.githubusercontent.com/u/104710243?v=4" alt='@HYBEN09' width="130" height="130"> | <img src="https://avatars.githubusercontent.com/u/88275787?v=4" alt='@jade0819' width="130" height="130"> | <img src="https://avatars.githubusercontent.com/u/54127322?v=4" alt='@Akows' width="130" height="130"> | <img src="https://avatars.githubusercontent.com/u/116232939?v=4" alt='@H0onnn' width="130" height="130"> | 
| [@ramrami-B](https://github.com/ramrami-B)                                                                 | [@HYBEN09](https://github.com/HYBEN09)                                                                   | [@jade0819](https://github.com/jade0819)                                                             | [@Akows](https://github.com/Akows)                                                              | [@H0onnn](https://github.com/H0onnn)

<br />

## 🙌🏻 17팀의 협업
- 매주 [노션 팀스페이스](https://blushing-dry-254.notion.site/TEAMSPACE-ff2aa14b65a64ab0a6921460be48489c?pvs=4)에 과제 요구사항을 꼼꼼하게 기록하고, 회의록을 작성해요!
- [코딩 컨벤션](https://blushing-dry-254.notion.site/843c479139054c8e915a2b1aa28f51c6?pvs=4)을 정해서 함께 지켜요
- 최소 주 3회 이상 회의, 모각코 등을 진행하며 함께 개발해요! (팀 노션 하단 📸 Selfi 참고)
- [GitHub 프로젝트](https://github.com/orgs/WantedTeam17/projects/1)를 통해 할 일과 일정을 관리해요.
- 각자의 task는 GitHub Issues에 기록해요! [이슈 기록 예시](https://github.com/WantedTeam17/pre-onboarding-12th-3-17/issues/25)

<br />

## 🖥️ 프로젝트 링크
[🔗Link](https://web-pre-onboarding-12th-3-17-eu1k2lllc2s1v2.sel3.cloudtype.app/)

FE 배포는 `Cloud Type`을 이용하였습니다.

<br />

## 💡 프로젝트 실행 가이드
- 실행을 위해 다음 Node version이 필요합니다.
  [Node.js 18.17.0](https://nodejs.org/ca/blog/release/v18.17.0/)

- 실행 방법 (2가지 중 택 1)
  > 1. 배포 링크를 통한 접속
  > 2. ZIP 파일 다운로드 및 압축 풀기 후 코드 에디터로 실행
  > 3. 아래 커멘드를 이용한 실행

```bash
$ git clone https://github.com/WantedTeam17/pre-onboarding-12th-3-17.git
$ cd pre-onboarding-12th-3-17
$ npm install
$ npm run start
```

<br />

## ⚒️ 기술 스택

#### Development

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=Typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
<img src="https://img.shields.io/badge/Node.js v18 (LTS)-grey?style=for-the-badge&logo=nodedotjs">

#### Convention
![Static Badge](https://img.shields.io/badge/ESLINT%20-%20%23942894?style=for-the-badge&logo=ESLINT)
![Static Badge](https://img.shields.io/badge/PRETTIER%20-%20%23AE5E1A?style=for-the-badge&logo=PRETTIER)
<img src="https://img.shields.io/badge/husky-brown?style=for-the-badge&logo=npm">

#### Network & Route
![Axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=black)
![Static Badge](https://img.shields.io/badge/REACT%20ROUTER%20-%20%23F4AAAA?style=for-the-badge&logo=REACT%20ROUTER)

### Styling
<img src="https://img.shields.io/badge/styled component-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>

<br />

## 🚀 프로젝트 기술 구현에 대한 논의

#### [Assignment 1] 검색창 및 검색어 추천 기능 (검색값에 따른 API 호출로 추천 검색어 표시)
- 1.1) 검색창 컴포넌트 구조
  
[🔗UI 컴포넌트 구조 다이어그램](#-다이어그램)
> 컴포넌트를 관심사별로 분리하여 설계하여 각 컴포넌트는 각자의 기능에만 충실하도록 구현했습니다.

- 1.2) API 호출
> API 호출 시에는 Axios 라이브러리를 사용하였습니다.
> >
> client 로직을 class 문법으로 작성하여 메서드를 분리하고, private field를 이용해 외부에서 API 요청 URL에 접근할 수 없도록 했습니다.

- 1.3) 추천 검색어 표시
> 사용자가 Input에 입력한 검색값에 따라 API를 호출하여 response data를 받아와, 이를 mapping 하는 방식을 사용했습니다.

- 1.4) 검색어가 없을 때
> 아무런 검색어가 없을 때는 모달창에 '추천 검색어 없음' 문구를 출력하였습니다.
> ![image](https://github.com/WantedTeam17/pre-onboarding-12th-3-17/assets/116232939/190d6910-d662-4560-9e38-0266cb2b568d)

#### [Assignment 2] 로컬 캐싱 기능 (API 호출 결과에 대한 로컬 캐싱)
로컬 캐싱 기능을 구현하는 데에는 다양한 방법이 존재합니다. (storage, library, cache API, react-context, indexedDB 등) 저희 팀에서는 해당 방법 중 'local storage'를 이용한 캐싱을 선택했습니다.
저희가 생각한 local storage를 사용했을 때의 장점은 다음과 같습니다.

1. 편리함 - 웹 스토리지의 경우 단순한 구조로 데이터를 불러오고 삭제할 수 있습니다. 그로 인해 학습자의 입장에서 캐싱의 기본 개념을 빠르게 익히고 구현할 수 있습니다.
2. 호환성 - 대부분의 웹 브라우저는 웹 스토리지를 지원하기에 호환성 문제를 걱정하지 않아도 됩니다.
3. 직관성 - 웹 스토리지는 개발자가 브라우저의 개발자 도구에서 스토리지의 내용을 쉽게 확인하고 필요에 따라 수정할 수 있습니다. 따라서, 캐싱 데이터가 어떻게 저장되고 수정 및 삭제되는지 직관적인 확인이 가능합니다.

위와 같은 이유로 웹 스토리지로 로컬 캐싱의 기본 개념과 패턴을 빠르게 학습하여 직접 사용해 보고자 해당 방법을 채택하였으며, 추후 cache API와 같은 방법을 통해 리팩토링을 논의하였습니다. 웹 스토리지 중 탭을 닫거나 브라우저를 종료했을 때 데이터가 유실되지 않도록 하기 위해 'local storage'를 선택했습니다.

- 2.1) 캐싱 로직 구현
> 커스텀 훅의 경우 리액트의 컴포넌트 내에서만 사용되어야 하는 규칙이 따르기 때문에, API 호출 등에서 사용되는 caching 로직은 util 함수로 작성하는것이 더 적합하다고 판단하여, localCaching.ts util 함수를 만들어 사용했습니다. 사용자가 검색어를 입력하면 데이터 조회 로직을 수행하여 storage 내의 key 값을 확인하고, 캐시에 데이터가 있으면 API를 호출하지 않고 해당 값을 사용하도록 했습니다. 만약 캐시에 데이터가 없다면, API 호출을 통해 데이터를 가져오게 됩니다.

- 2.2) expire time 구현
> 캐싱 데이터의 유효시간을 고려하여 expire time을 적용했습니다. class의 private field 내 #now (현재시간), #expireTime (유효시간) 을 설정하여 set 메소드에서 storage에 데이터를 저장할 때, `expiry: this.#now + this.#expireTime` 구문으로 데이터의 유효시간을 설정합니다. 그 후 get 메소드를 통해 storage 값을 가져올 시 조건문을 통해 유효시간을 검사하게 됩니다. 만약, 항목의 유효시간이 지날 경우 localstorage.removeItem을 이용하여 캐싱 데이터를 삭제하고 null을 반환합니다.

```ts
// LocalCache.ts

class LocalCache {
  #expireTime;
  #now;

  constructor() {
    this.#now = new Date().getTime();
    this.#expireTime = 5 * 60 * 1000;
  }

  get(key: string) {
    const value = localStorage.getItem(key);
    const item = value ? JSON.parse(value) : null;

    if (item && this.#now > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item ? item.value : null;
  }

  set(key: string, value: object) {
    const item = {
      value: value,
      expiry: this.#now + this.#expireTime,
    };

    localStorage.setItem(key, JSON.stringify(item));
  }
}

export const localCache = new LocalCache();

// data fetching logic ..

 useEffect(() => {
    if (!KOREAN_REGEX.test(debounceValue)) return;

    const fetchData = async () => {
      setIsLoading(true);

      let tempData = localCache.get(debounceValue);

      if (!tempData && debounceValue) {
        tempData = await Axios.search(debounceValue);
        localCache.set(debounceValue, tempData);
      }

      setData(tempData);
      setIsLoading(false);
    };

    fetchData();
  }, [debounceValue]);
```

#### [Assignment 3] API 호출 최적화 (입력마다 API를 호출하지 않도록 제한)
Input에 사용자가 검색어를 입력할 때 입력마다 API가 호출되는 문제가 있었습니다. 예를 들어, '암' 키워드를 검색할 경우 'ㅇ + ㅏ + ㅁ' 이런 식으로 하나의 키워드에 총 3번의 API를 호출했습니다. 이는 비용상으로 매우 비효율적이며, 서버에 부하를 줄 위험이 있습니다. 그 때문에 저희 팀원들이 이를 제한하기 위해 생각해 낸 방법으로는 '디바운싱, 쓰로틀링, 캐싱'이 있었고, 그 중 디바운스 기법을 채택했습니다.

디바운스 기법은 연속된 이벤트를 그룹화하여 마지막 이벤트가 발생한 후 일정 시간이 지났을 때 처리하는 방법입니다. 빠르게 반복되는 이벤트에 대한 처리를 최적화하여 성능을 향상하도록 시키고 비용을 절감하는 데 큰 도움을 주는 기법으로 이는 사용자가 Input에 문자를 입력할 때마다 API가 호출되는 것을 방지하는 데 있어 가장 적합한 방법이라고 생각했습니다.

- 3.1) 디바운싱
> 디바운싱을 처리하는 로직은 리액트 컴포넌트 내에서만 사용되며 컴포넌트의 로직을 단순화하고, 추후 여러 곳에서 재사용될 가능성을 염려하여 useDebounce라는 커스텀 훅을 만들어 작성하였습니다. 작동 방식은 다음과 같습니다. 첫 번째 useEffect를 이용하여 value의 값 (입력되는 검색값) 이 변경될 때마다 디바운싱 로직을 실행합니다. 그 후 setTimeout API 통해 delay 시간이 지난 후 debounceValue를 최신의 value 값으로 설정합니다. 두 번째 useEffect 에서는 debounceValue의 값이 변경될 때마다 API를 호출하는 로직을 실행합니다.

- 3.2) 캐싱
> 'Assignment 2'에 기재된 로컬 캐싱 기능을 통해 API 호출을 최적화합니다.

- 3.3) 정규표현식으로 오탈자 검사
> 오타를 포함한 검색어는 API를 호출하지 않도록 방지합니다.

```tsx
// useDebounce.ts

import { useEffect, useState } from "react";
import { localCache } from "../utils/LocalCache";
import { Axios } from "../api/AxiosClient";
import { TermsType } from "../constants/@type/termsType";
import { KOREAN_REGEX } from "../constants/regex";

const useDebounce = (value: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState<string>(value);
  const [data, setData] = useState<TermsType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!value.trim()) {
      setDebounceValue(value);
    } else {
      const timer = setTimeout(() => {
        setDebounceValue(value);
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [value]);

  useEffect(() => {
    // 정규 표현식을 사용해 오타를 검사하여 불필요한 API 요청 방지
    if (!KOREAN_REGEX.test(debounceValue)) return;

    const fetchData = async () => {
      setIsLoading(true);

      let tempData = localCache.get(debounceValue);

      if (!tempData && debounceValue) {
        tempData = await Axios.search(debounceValue);
        localCache.set(debounceValue, tempData);
      }

      setData(tempData);
      setIsLoading(false);
    };

    fetchData();
  }, [debounceValue]);

  return { data, isLoading };
};

export default useDebounce;

// SearchBar.tsx

import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
// 이 외 import 구문

const SearchBar = () => {
  const [isFocus, handlerFocus] = useFocus();
  const [focusIdx, setFocusIdx] = useState<number>(-1);
  const [query, setQuery] = useState<string>(""); // 유저의 입력 값 (query)
  const { data, isLoading } = useDebounce(query, 500); // useDebounce 훅으로 query와 delay time 전달

// 이 외 생략
```

#### [Assignment 4] 키보드 접근성 (키보드로 추천 검색어에 접근할 수 있도록 구현)
사용자에게 편리한 UX 경험을 제공하기 위해 키보드 접근성을 고려하여 추천 검색어 모달창에 렌더링 되는 Item에 키보드 방향키로 접근할 수 있도록 구현했습니다. 입력된 키보드의 키값을 바탕으로 이벤트리스너를 추가하는 방식, keyup & keydown 이벤트를 사용하는 방식, CSS를 이용한 방식 등 다양한 방식에 대해 논의하였고, 저희 팀에서 최종적으로 선택한 방식은 'keypress' 방식입니다.

'keypress' 방식은 주로 문자 혹은 숫자키에 대한 반응을 제어하기 때문에 방향키와 엔터키만을 사용하는 해당 기능에 적합하다고 판단했습니다. 또한, keydown & keyup 이벤트의 경우 키가 눌렸을 때와 키가 떼어질 때 각각 이벤트를 처리해 주어야 하므로 로직에 대한 복잡성이 증가할 수 있다고 판단했습니다.

- 4.1) keypress 로직 구현 방식
> 해당 로직은 keypress에 대한 로직을 처리하는 util 함수를 작성해 관리했습니다. 포커싱 되는 item의 index 값을 focusIdx 상태로 관리하여 keypress 시 focusIdx +1, -1 로직을 통해 포커싱이 변환되도록 구현했습니다.

- 4.2) 포커싱 이탈 이슈
> focusIdx에 대해 단순히 +, - 만 처리할 경우 반환되는 item의 length보다 focusIdx가 크거나 작아져 포커싱이 제대로 이루어지지 않는 문제를 해결하기 위해 조건문을 사용하여 맨 첫 번째 요소 혹은 맨 마지막 요소에서 keypress 되었을 경우의 예외 처리를 해주었으며, 이에 따라 포커싱이 모달창 안에서 순회하도록 구현했습니다.

- 4.3) enter keypress
> 사용자가 Enter 키를 입력했을 경우 포커싱된 item의 sickNm을 input의 value로 설정하여 해당 값으로 검색되도록 했습니다.

- 4.4) 키보드 스크롤링
> focusIdx로 포커싱만 처리해 줄 경우 만약 모 문재인 지지자 보다 출력되는 item의 개수가 많아지면 CSS 속성으로 인해 스크롤바가 생기게 되는데, 이때 스크롤이 이동하지 않는 문제가 발생했습니다. 이를 해결하기 위해 모달창과 각각의 item에 React ref, forwardRef를 사용하여 요소들의 위치를 참조, 위칫값에 따라 스크롤링이 되도록 구현했습니다.

```tsx
// processKeyboard.ts

import React from "react";
import { TermsType } from "../constants/@type/termsType";

const processKeyboard = (
  target: string,
  focusIdx: number,
  setFocusIdx: React.Dispatch<React.SetStateAction<number>>,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  terms: TermsType[]
) => {
  if (terms && target === "ArrowDown") {
    setFocusIdx((focusIdx + 1) % terms.length);
  }
  if (terms && target === "ArrowUp") {
    setFocusIdx((focusIdx - 1 + terms.length) % terms.length);
  }
  if (terms && target === "Enter") {
    if (focusIdx < 0 || focusIdx >= terms.length) return;

    setValue(terms[focusIdx].sickNm);
  }
  if (target === "Escape") {
    setFocusIdx(-1);
  }
};

export default processKeyboard;
```
![키보드](https://github.com/WantedTeam17/pre-onboarding-12th-3-17/assets/116232939/d03df09e-5dab-46ee-b26e-3a5ca832d835)


#### [Assignment 5] DB 서버 백엔드 설정
이번 과제에서는 간단한 DB/백엔드 프로젝트를 제공하고, 이를 이용하여 API 호출을 통한 response data를 받아와 클라이언트 단에서 처리하는 방식이었습니다. DB 이용에 대해 저희 팀원들은 두 가지 방식을 생각했습니다.

1. 코드 에디터를 2개 실행하여 각각 FE, BE 파일을 열어 가동한다.
2. FE 프로젝트 내부에 DB JSON 파일을 저장한 뒤, json-server와 concurrently 라이브러리를 적용하여 FE가 가동되었을 때 간이 BE 서버가 동시에 가동되도록 한다.

코드 에디터 하나만으로 FE와 BE 서버를 동시에 실행시킬 수 있다는 장점이 있어, 개발 초기 저희는 2번의 방식을 채택했습니다.

- 5.1) 배포 환경에서 json-server가 작동하지 않는 이슈
> FE 프로젝트의 로컬 환경에서 json-server는 정상적으로 작동하였으나, 배포 환경에서는 API 호출 시 'Network Error'를 반환하는 문제가 발생했습니다. 원인을 찾아본 결과 json-server는 프로덕션 혹은 클라우드 환경에서의 실행을 목적으로 설계되어 FE 프로젝트 내부에서 json-server 라이브러리만으로 배포는 불가능했습니다. 이에 팀원 한 분이 BE 서버를 호스팅 플랫폼을 통해 배포하여 팀원 전체가 로컬 환경, 배포 환경 모두에서 API 요청을 정상적으로 가능하여지도록 했습니다.

다양한 호스팅 플랫폼 중 간단한 수준의 BE 서버를 json-server의 기능을 모방한 서버리스 함수를 사용해 배포할 수 있는 'Vercel'을 이용했습니다.

[백엔드 서버 배포 과정](https://www.notion.so/React-js-Typescript-Vercel-API-64e56592ecd94169b08fa5f1425e78db)

<br />

## 아키텍쳐

### 디렉토리 구조
```bash
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── assets
│   │   ├── logo.svg
│   │   ├── mainImg-1.svg
│   │   ├── mainImg-2.svg
│   │   └── mainImg-3.svg
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.tsx
│   ├── api
│   │   └── AxiosClient.ts
│   ├── components
│   │   ├── RecentSearchList.tsx
│   │   ├── search
│   │   │   ├── HighlightKeyword.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── RelatedSearches.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── SearchItem.tsx
│   │   └── ui
│   │       ├── Button.tsx
│   │       └── ClearButton.tsx
│   ├── constants
│   │   ├── @type
│   │   │   └── termsType.ts
│   │   ├── colors.ts
│   │   ├── number.ts
│   │   ├── regex.ts
│   │   └── url.ts
│   ├── custom.d.ts
│   ├── hooks
│   │   ├── useDebounce.ts
│   │   ├── useFocus.ts
│   │   ├── useMovingScrollToKeyboard.ts
│   │   └── useRecentSearches.ts
│   ├── index.css
│   ├── index.tsx
│   ├── layout
│   │   ├── Header.tsx
│   │   └── PageLayout.tsx
│   ├── pages
│   │   └── SearchPage.tsx
│   ├── routes.tsx
│   └── utils
│       ├── LocalCache.ts
│       └── processKeyboard.ts
├── tsconfig.json
├── webpack
│   ├── common.js
│   ├── config.js
│   ├── dev.js
│   ├── plugin
│   │   ├── dotEnv.js
│   │   └── html.js
│   └── prod.js
└── webpack.config.js
```

<br />

# 🔗 다이어그램
### UI 컴포넌트 구조
<img src="https://my-web-contents-bucket.s3.ap-northeast-2.amazonaws.com/ui.drawio.png" />


### UML (Sequence Diagram)
<img src="https://my-web-contents-bucket.s3.ap-northeast-2.amazonaws.com/sequence.drawio.png" />


