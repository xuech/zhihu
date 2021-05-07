echo -e "---------docker Login--------"
docker login --username=$1 registry.cn-hangzhou.aliyuncs.com --password=$2
echo -e "---------docker Stop--------"
docker stop zhihu
echo -e "---------docker Rm--------"
docker rm zhihu
docker rmi registry.cn-hangzhou.aliyuncs.com/xuech/zhihu:latest
echo -e "---------docker Pull--------"
docker pull registry.cn-hangzhou.aliyuncs.com/xuech/zhihu:latest
echo -e "---------docker Create and Start--------"
docker run --rm -d -p 8081:80 --name zhihu registry.cn-hangzhou.aliyuncs.com/xuech/zhihu:latest
echo -e "---------deploy Success--------"
