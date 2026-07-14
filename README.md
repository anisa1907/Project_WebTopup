### JUDUL PROYEK
MobileTop

## Deskripsi Project
Mobile Top adalah sebuah website yang dibuat untuk memudahkan pengguna dalam melakukan
top up diamond game secara cepat, mudah, dan aman. Website ini menyediakan layanan 
pembelian diamond untuk berbagai game populer dengan tampilan yang sederhana dan user-friendly.

## Kelompok 7 :
Project lead : Anisa Marsyahila
Front end develop : Delya Melviani
Backend : Anom Surya

## Image Frontend Produksi
Image frontend yang siap dipakai untuk release:

- Frontend: ghcr.io/[org]/[repo]-fe:v1.0.0

## Build Image Frontend
```bash
docker build -t webtopup-frontend:local .
```

## Tag Image Frontend
```bash
docker tag webtopup-frontend:local ghcr.io/[org]/[repo]-fe:v1.0.0
```

## Login ke GitHub Container Registry
```bash
docker login ghcr.io
```

## Push Image Frontend
```bash
docker push ghcr.io/[org]/[repo]-fe:v1.0.0
```

## Menjalankan Aplikasi Frontend
```bash
docker run -d -p 8080:80 ghcr.io/[org]/[repo]-fe:v1.0.0
```

Frontend dapat diakses melalui http://localhost:8080.
