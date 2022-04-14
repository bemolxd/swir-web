# System Wypożyczeń i Rezerwacji

Aplikacja stworzona w ramach pracy dyplomowej pt. "Opracowanie serwisu do rezerwacji i wypożyczeń sprzętu w Katedrze Systemów Multimedialnych".

## Założenia projektowe

Opracowanie serwisu ma na celu poprawę i usystematyzowanie procesu wypożyczania i rezerwacji sprzętu, w którego posiadaniu jest KSM. Po stronie zwykłego użytkownika system zapewnia `TODO`. Po stronie administratora (pracownika Katedry) system pozwala na `TODO`.

## Uruchamianie aplikacji

W celu poprawnego uruchomienia aplikacji w środowisku testowym należy upewnić się, że usługa [API](https://github.com/bemolxd/swir-api) jest dostępna oraz ustawić odpowiednie parametry w pliku `.env`:

```
REACT_APP_API_URL='api_url'
REACT_APP_CLIENT_URL='http://localhost:5001'
```

a następnie wywołać polecenia:

```
yarn install
yarn dev
```
