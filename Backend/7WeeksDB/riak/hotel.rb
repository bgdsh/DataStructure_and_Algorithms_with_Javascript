require 'rubygems'
require 'riak'
STYLES=%w{single double queen king suite}
client=Riak::Client.new(:http_port=>8091)
bucket=client.bucket('rooms')
for floor in 1.. 100
	current_rooms_block=floor*100
	puts "Making rooms #{current_rooms_block}-#{current_rooms_block+100}"
	for room in 1.. 100
		ro=Riak::RObject.new(bucket,(current_rooms_block+room))
		style=STYLES[rand(STYLES.length)]
		capacity=rand(8)+1
		ro.content_type="application/json"
		ro.data={'style'=>style,'capacity'=>capacity}
		ro.store
	end
end