prismaFiles=$(find ./prisma/ -maxdepth 1 -type f -name "*.prisma")

for file in $prismaFiles 
do
    npx prisma generate --schema $file
done