# System Wypożyczeń i Rezerwacji

Aplikacja stworzona w ramach pracy dyplomowej pt. "Opracowanie serwisu do rezerwacji i wypożyczeń sprzętu w Katedrze Systemów Multimedialnych".

## Funkcjonalność

Opracowanie serwisu ma na celu poprawę i usystematyzowanie procesu wypożyczania i rezerwacji sprzętu, w którego posiadaniu jest KSM. Po stronie zwykłego użytkownika system zapewnia:

- wgląd do bazy urządzeń KSM,
- możliwość sprawdzenia dostępności sprzętu,
- możliwość stworzenia (poprzez dodanie urządzenia) zgłoszenia i przesłania go do pracownika KSM,
- wgląd do wszystkich swoich aktywnych i/lub kompletowanych zgłoszeń,
- wgląd do wszystkich swoich archiwalnych zgłoszeń.

Po stronie administratora (pracownika Katedry) system pozwala na:

- wgląd do bazy urządzeń KSM i modyfikowanie zawartości (dodawanie, edytowanie, usuwanie),
- możliwość sprawdzenia dostępności sprzętu,
- możliwość zarządania zgłoszeniami (odrzucanie, akceptacja -> finalizacja),
- wgląd do wszystkich przesłanych zgłoszeń,
- wgląd do wszystkich zarchiwizowanych zgłoszeń,
- wgląd do wszystkich użytkowników systemu i zarządzanie ich uprawnieniami,
- wgląd do wszystkich zgłoszeń danego użytkownika (widok szczegółu użytkownika).

## Uruchamianie aplikacji

W celu poprawnego uruchomienia aplikacji w środowisku testowym należy upewnić się, że usługa [API](https://github.com/bemolxd/swir-api) jest dostępna oraz ustawić odpowiednie parametry w pliku `.env`, na przykład:

```
REACT_APP_API_URL='http://localhost:5000'
REACT_APP_CLIENT_URL='http://localhost:5001'
REACT_APP_MANUAL_LINK_USER='swir_manual_user.pdf'
REACT_APP_MANUAL_LINK_ADMIN='swir_manual_admin.pdf'
```

a następnie wywołać polecenia:

```
yarn install
yarn dev
```
